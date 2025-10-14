import {defineConfig} from "vitest/config";

export default defineConfig({
  test: {
    browser: {
      enabled: true,
      headless: true,
      provider: 'playwright',
      instances: [
        {
          browser: "chromium",
        },
      ]
    },
    coverage: {
      enabled: true,
      experimentalAstAwareRemapping: true,
      thresholds: {
        '100': true
      },
      provider: 'v8',
    }
  }
})
