import Component from "@glimmer/component";
import VelvetIconUser from "velvet-thunder/components/velvet-icon/user";

interface VelvetAvatarSignature {
  Args: {
    /// The initials of the user.
    /// @default [""]
    initials?: string;
    /// Indicate if the avatar is round.
    /// @default [false]
    isRound?: boolean;
    /// The name of the user.
    /// @default [""]
    name?: string;
    /// The size of the avatar.
    /// @default ["md"]
    size?: "sm" | "md" | "lg";
    /// The source of the image.
    /// @default [""]
    src?: string;
    /// The appearance of the avatar.
    /// @default ["primary"]
    variant?: string | "primary";
  };
  Element: HTMLDivElement;
}

export default class VelvetAvatar extends Component<VelvetAvatarSignature> {
  VelvetIconUser = VelvetIconUser;

  get initials() {
    return (this.args.name || "")
      .split(" ")
      .slice(0, 2)
      .map((name) => name.charAt(0))
      .join("");
  }
}
