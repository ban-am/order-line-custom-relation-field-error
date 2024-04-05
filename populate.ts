import { populate } from '@vendure/core/cli';
import { bootstrap, mergeConfig, defaultConfig } from '@vendure/core';
import { } from '@vendure/core';
import { config } from './src/vendure-config';
import path from 'path';
import { initialData } from './mock-data/initial-data';

if (require.main === module) {
  const populateConfig = mergeConfig(
      defaultConfig,
      mergeConfig(config, {
        apiOptions:{
          port: 3000
        },
        authOptions: {
              tokenMethod: 'bearer',
              requireVerification: false,
          },
      }),
  );

  populate(
      () => bootstrap(populateConfig),
      initialData,
      resolveFrom('./mock-data/products.csv'),
  )
  .then(async app => {
      return app.close();
  })
  .then(
      () => process.exit(0),
      err => {
          console.log(err);
          process.exit(1);
      },
  );
}
  
function resolveFrom(target: string): string {
  return path.join(__dirname, target);
}
