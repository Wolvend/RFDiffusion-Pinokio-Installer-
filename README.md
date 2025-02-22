RFdiffusion Pinokio Installer

This repository provides a Pinokio app that automates the entire setup process for RFdiffusion:

    Auto-detects your Operating System (Windows, macOS, or Linux)
    Auto-detects your GPU (NVIDIA, AMD, Intel, or falls back to CPU)
    Creates an optimized Conda environment (RFdiffusion_env)
    Clones or updates the official RFdiffusion repository
    Downloads model weights (with optional checksum checks and fallback mirrors)
    Optionally creates an HPC Slurm script (if on Linux + SLURM)
    Updates your shell startup file (aliases, environment variables)
    Provides a Start script to do a quick inference test

Once imported into Pinokio, you’ll see two buttons:

    Install: Runs install.json, which sets everything up.
    Start: Runs start.json, which can perform a test run or any custom command.

Repository Contents

RFdiffusion-Pinokio-Installer/
├── pinokio_meta.json   # Basic app metadata for Pinokio
├── install.json        # Main installation script (OS/GPU detection, environment creation, etc.)
├── start.json          # Post-install “Start” script (test run or any command)
├── config.json         # Example config file downloaded by the installer
├── helper_script.sh    # Sample helper script also downloaded
├── requirements.txt    # (Optional) Dependencies for pip
└── environment.yml     # (Optional) If you prefer conda env from a .yml file

Key Files

    pinokio_meta.json
    Tells Pinokio the name, version, and description of your app.
    install.json
    Handles all the steps needed to install RFdiffusion (detect OS, GPU, create conda env, clone repo, download models, HPC script, etc.).
    start.json
    Lets you run a quick test after installation (e.g., a sample inference).
    config.json, helper_script.sh
    Demonstration files that get downloaded by the installer script. Adjust or remove as needed.

Prerequisites

    Pinokio (latest version recommended)
    Conda (Miniconda or Anaconda)
    Git (installed and on your PATH)

Installation & Usage

    Clone or Download this repository.
        You can also ZIP the folder or host it on GitHub.

    Open Pinokio.
        If you have an older version, consider updating to ensure it supports advanced JSON actions.

    Import this project as a Pinokio app:
        Add New App → Import from File (if you zipped the folder) or Download from URL (if you put it on GitHub).
        Pinokio reads pinokio_meta.json, install.json, and start.json to recognize it as a standard app.

    Click “Install.”
        Pinokio will run install.json, setting up the environment, cloning RFdiffusion, downloading model weights, etc.
        Watch the console/log in Pinokio for progress messages or errors.

    Click “Start.”
        Pinokio will run start.json, typically doing a test inference command.
        Check the ./output_start (or whichever path is used) to see the results.

HPC Slurm (Optional)

During installation, if you’re on Linux and Pinokio detects sbatch, it creates a slurm_rfdiffusion.sh script for HPC usage. You can customize that script or skip HPC if you don’t need it.
Troubleshooting

    No Install/Start Buttons
        Ensure pinokio_meta.json, install.json, and start.json are in the root folder.
        Validate each JSON file (no syntax errors, proper "script": [...] structure).
        Import the entire folder in Pinokio (not a single file).

    Conda Not Found
        Pinokio logs an error if conda isn’t on your PATH. Install Miniconda/Anaconda or let Pinokio manage it if that’s an option.

    GPU Not Detected
        AMD or Intel detection might fail if rocm-smi or clinfo isn’t installed. The script falls back to CPU in that case.

    Checksum Mismatch
        The checksums in install.json are placeholders. Replace them with actual SHA256 sums if you want real verification.

    Update Pinokio
        If you see “Cannot read properties of undefined” or similar parse errors, you may need a more recent Pinokio version that fully supports the advanced JSON actions.

Example Test Command

After a successful install, you can manually test:

conda activate RFdiffusion_env
cd RFdiffusion
python scripts/run_inference.py "contigmap.contigs=[150-150]" \
    inference.output_prefix=./output_monomer \
    inference.num_designs=1

License

(If you have a specific license, mention it here. Otherwise, omit this section or use a placeholder like MIT or Apache.)
Acknowledgments

    RFdiffusion GitHub for the core repository.
    Pinokio Documentation for the automation platform.

Enjoy your one-click RFdiffusion installer! If you run into issues, check the logs in Pinokio or open an issue in this repository.
