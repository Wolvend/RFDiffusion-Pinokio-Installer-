# RFDiffusion-Pinokio-Installer-
RFDiffusion Pinkio installer ChatGPT experiment

# RFdiffusion One-Click Installer (Pinkio)

This repository contains a Pinkio script that automates the complete setup process for RFdiffusion. The installer:

- **Detects** your Operating System (Windows, macOS, Linux)
- **Auto-detects** your GPU (NVIDIA, AMD, Intel, or falls back to CPU)
- **Creates** an optimized Conda environment (`RFdiffusion_env`)
- **Clones/updates** the RFdiffusion repository from GitHub
- **Downloads** model weights (with checksum verification and fallback mirrors)
- **Optionally** generates an HPC Slurm script on Linux
- **Fetches** additional configuration files (e.g., `config.json`, `helper_script.sh`)
- **Updates** your shell startup with necessary environment variables and aliases

## Usage

1. **Prerequisites:**
   - Install **Conda** (Miniconda or Anaconda) and **Git**.
   - Use the latest version of **Pinkio** (with support for `execute`, `conditional`, `parallel`, etc.).

2. **Import & Run:**
   - Import `rfdiffusion_installer_expanded.pinkio` into Pinkio.
   - Run the script. It will:
     - Create the `RFdiffusion_env` Conda environment.
     - Clone or update the RFdiffusion repository.
     - Download model weights into `RFdiffusion/models`.
     - Update your shell configuration (PowerShell on Windows; `~/.zshrc` or `~/.bashrc` on macOS/Linux).

## Testing

After installation, test with:

```bash
conda activate RFdiffusion_env
cd RFdiffusion
python scripts/run_inference.py "contigmap.contigs=[150-150]" \
    inference.output_prefix=./output_monomer \
    inference.num_designs=1

