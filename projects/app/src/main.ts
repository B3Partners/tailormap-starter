import { enableProdMode, provideZoneChangeDetection } from '@angular/core';
import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideCore } from '@tailormap-viewer/core';
import { provideHttpClient, withInterceptorsFromDi, withXhr, withXsrfConfiguration } from '@angular/common/http';
import { TailormapApiConstants } from '@tailormap-viewer/api';
import { AppComponent } from './app/app.component';


const main = async () => {
  try {
    await bootstrapApplication(AppComponent, {
      providers: [
        provideZoneChangeDetection(),
        provideCore({
          production: environment.production,
          viewerBaseUrl: environment.viewerBaseUrl,
        }),
        provideHttpClient(withXhr(), withInterceptorsFromDi(), withXsrfConfiguration({
          cookieName: TailormapApiConstants.XSRF_COOKIE_NAME,
          headerName: TailormapApiConstants.XSRF_HEADER_NAME,
        })),
      ],
    });
  } catch (error) {
    console.error(error);
  }
};

if (environment.production) {
  enableProdMode();
}

main();
