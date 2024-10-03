import { TranslateService } from '@ngx-translate/core';
import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MytranslateService {


  defaultLang = 'en';

   constructor(private translateService: TranslateService,@Inject(PLATFORM_ID) private platformId: Object) {
     if (isPlatformBrowser(this.platformId)) {

      this.lang()
       
   }

   
   }
   lang(){
    const savedLang = localStorage.getItem('lng');
       if (savedLang=="en") {
         this.defaultLang = savedLang;
         document.dir='ltr'
       }
       if (savedLang=="ar") {
        this.defaultLang = savedLang;
        document.dir='rtl'
      }
       this.translateService.setDefaultLang(this.defaultLang);
       this.translateService.use(this.defaultLang);
     }

   changeLang(lang: string) {
     this.translateService.use("en");
     if (isPlatformBrowser(this.platformId)) {
       localStorage.setItem('lng', lang);
       this.lang()
     }
    
    
   }
}
