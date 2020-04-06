---
title: Useful Tools for VSCode
date: 2020-04-03
description: ""
image: "../../../images/posts/vscode.png"
---
How to develop exactly inside docker container on remote server
---
While you are tired from developing code in Jupyter notebook in your browser, you can try VS Code to develop exactly inside docker container on Hachiko from a user-friendly interface.

All necessary information are in [Tutorial](https://code.visualstudio.com/docs/remote/containers-advanced#_developing-inside-a-container-on-a-remote-docker-host)

But shortly, you need to:

1. Install Docker+Remote Developing pack - see [HOWTO](https://code.visualstudio.com/docs/remote/containers#_installation)
 If you already have docker, VSCode and your 
 `$USER`  in `docker` group:
 ```bash
 sudo usermod -aG docker $USER
 ```
just install extension via `Ctrl+P`: 
```bash
ext install ms-vscode-remote.vscode-remote-extensionpack
```

2. Add remote host in settings: 
      * `Ctrl+Comma` (File->Preferences->Settings):
      * Find `edit in settings.json` 
      * Add line (with your data): 
      ```
      bash
      "docker.host":"ssh://username@host"
      ``` 
      *Tip: host dns name instead of IP may lead to error*

1. In VS Code Attach to existed docker container:
     * Connect to container: `F1` and `Remote-Containers: Attach to Running Container...`
     