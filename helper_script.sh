#!/usr/bin/env bash
# Example helper script for RFdiffusion

echo "Activating RFdiffusion_env..."
conda activate RFdiffusion_env

echo "Listing model files in RFdiffusion/models:"
ls -lh ./RFdiffusion/models

echo "Done!"
