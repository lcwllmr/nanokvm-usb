# Fork of Sipeed's NanoKVM-USB desktop software

Check the [original repo](https://github.com/sipeed/NanoKVM-USB) for detailed information, updates etc.
This fork is a desktop-only version, that removes a bunch of features that I personally don't need, adds a packaging system for nix and simplifies the software and build process wherever possible.
A list of changes done can be found below.

## Installation

TODO: directly install on NixOS right from this flake.

To run right from this repo, use:

```bash
nix develop
pnpm install
pnpm start
```

On Linux, make sure that your user has permissions to access serial ports. It must be added to the group `dialout` on NixOS and Debian or `uucp` on Arch Linux.

## Changelog relative to original

- fully removed browser support
