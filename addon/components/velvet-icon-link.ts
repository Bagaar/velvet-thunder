import { service } from "@ember/service";
import Component from "@glimmer/component";
import { Link, type LinkManagerService } from "ember-link";

interface VelvetIconLinkSignature {
  Args: {
    /// Indicate if the icon link is round.
    /// @default [false]
    isRound?: boolean;

    /// The size of the icon link.
    /// @default ["md"]
    size?: "xs" | "sm" | "md" | "lg";

    /// A valid route path or a custom `ember-link` `Link` instance.
    /// @default [undefined]
    to: string | Link;

    /// The appearance of the icon link.
    /// @default ["primary"]
    variant?: string | "primary";
  };
  Blocks: {
    /// The icon of the icon link.
    default: [];
  };
  Element: HTMLAnchorElement;
}

export default class VelvetIconLink extends Component<VelvetIconLinkSignature> {
  @service("link-manager") declare linkManagerService: LinkManagerService;

  get link() {
    const { to } = this.args;

    if (typeof to === "string") {
      return this.linkManagerService.createLink(
        this.linkManagerService.getLinkParamsFromURL(to),
      );
    }

    return to;
  }
}
