import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Resolve,
} from '@angular/router';
import { PlanningService } from 'src/app/services/planning.service';

@Injectable({
  providedIn: 'root',
})
export class SearchService implements Resolve<any> {
  constructor(
    private router: ActivatedRoute,
    private searchService: PlanningService
  ) {}

  async resolve(router: ActivatedRouteSnapshot) {
    // eslint-disable-next-line prefer-const

    const ville = router.paramMap.get('ville');
    const prestation = router.paramMap.get('prestation');
    const date = new Date(Date.parse(router.paramMap.get('date')));
    // eslint-disable-next-line radix
    const plage = router.paramMap.get('plage');
    const finalDate =
      date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    console.log({
      ville,
      prestation,
      date: finalDate,
      plage,
    });

    // this.getMonth() + 1 + '/' + this.getDate() + '/' + this.getFullYear();

    return this.searchService.research(ville, prestation, plage, finalDate);
    return;
  }

  // search() {
  //   this.searchService
  //     .search(
  //       this.ville._id,
  //       this.prestation._id,
  //       this.plage.plage._id,
  //       finalDate
  //     )
  //     .subscribe((res: any[]) => {
  //       for (let i = 0; i < res.length; i++) {
  //         this.prestService
  //           .searchPrest(this.prestation._id, res[i].uid)
  //           .subscribe((ress: any) => {
  //             console.log(ress);
  //           });
  //       }
  //     });
  // }
}
