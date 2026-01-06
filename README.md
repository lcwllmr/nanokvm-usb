# Fork of Sipeed's NanoKVM-USB desktop software

Check the [original repo](https://github.com/sipeed/NanoKVM-USB) for detailed information, updates etc.
This fork is a desktop-only version, that removes a bunch of features that I personally don't need, adds a packaging system for nix and simplifies the software and build process wherever possible.
A list of changes done can be found below.

## Installation

Run from flake on graphical NixOS via
```bash
nix run github:lcwllmr/nanokvm-usb
```
or install into your profile/system config.

To run right from this repo, clone it and run:

```bash
nix develop
pnpm install
pnpm start
```

On Linux, make sure that your user has permissions to access serial ports. It must be added to the group `dialout` on NixOS and Debian or `uucp` on Arch Linux.

## Changelog (relative to original)

`v0.2.0`:

- remove all languages other than english
- fully remove settings menu
- remove auto-update functionality
- remove mac support (for now)
- remove virtual keyboard

`v0.1.0`:

- added github actions for appimage on amd64-linux only (for now)
- fully removed browser support
