import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, PreloadAllModules, withPreloading  } from '@angular/router';
import { provideToastr } from 'ngx-toastr';
import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
 export const appConfig: ApplicationConfig = {  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes , withPreloading(PreloadAllModules)),  provideHttpClient(withFetch()), provideAnimations(), provideAnimations(),   
      provideToastr({
            timeOut: 3000,
            positionClass: 'toast-top-left',
          }),] };

// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideZoneChangeDetection({ eventCoalescing: true }),
//     provideRouter(routes),
//     provideHttpClient(withFetch()),
//     provideAnimations(),
//     provideToastr({
//       positionClass: 'toast-top-right', // ✅ أعلى يمين الشاشة
//     }),
//   ]
// };

// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideZoneChangeDetection({ eventCoalescing: true }),
//     provideRouter(routes),
//     provideHttpClient(withFetch()),
//     provideAnimations(),
//     provideToastr({
//       positionClass: 'toast-top-right', // أعلى يمين
//       timeOut: 3000,
//       closeButton: true,
//       progressBar: true,
//       toastClass: 'bg-white text-gray-800 rounded-lg shadow-lg p-4', // مفيش top أو right هنا!
//       titleClass: 'font-bold text-lg',
//       messageClass: 'text-sm',
//     }),
//   ]
// };

// provideToastr({
//   positionClass: 'toast-top-right', // دي بتحدد مكان الكونتينر مش التوست نفسه
//   timeOut: 3000,
//   closeButton: true,
//   progressBar: false,
//   toastClass: 'custom-toast',
// });