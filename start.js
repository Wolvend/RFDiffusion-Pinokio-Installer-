module.exports = {
  script: [
    {
      action: "print",
      message: "Running RFdiffusion test inference..."
    },
    {
      action: "execute",
      command: 'conda run -n RFdiffusion_env python scripts/run_inference.py "contigmap.contigs=[150-150]" inference.output_prefix=./output_start_test inference.num_designs=1',
      on_fail: {
        action: "print",
        message: "Test run failed. Check logs for details."
      }
    },
    {
      action: "print",
      message: "Test run complete! Check ./output_start_test for results."
    }
  ]
};
