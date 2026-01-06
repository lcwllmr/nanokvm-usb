{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  };
  outputs = inputs:
    let
      pkgs = import inputs.nixpkgs { system = "x86_64-linux"; };
    in {
      devShells.x86_64-linux.default = pkgs.mkShell {
        buildInputs = with pkgs; [
          pnpm
        ];
      };
      packages.x86_64-linux.default = let
        pname = "nanokvm-usb";
        version = "0.2.0";
        src = pkgs.fetchurl {
          url = "https://github.com/lcwllmr/nanokvm-usb/releases/download/v${version}/nanokvm-usb-v${version}-x86_64-linux.AppImage";
          hash = "sha256-aL5g3EyzilqkSSLesBB5jdBmkni/pG4RT6d4Q7vl0e0=";
        };
      in
        pkgs.appimageTools.wrapType2 {
          inherit pname version src;
        };
    };
}
