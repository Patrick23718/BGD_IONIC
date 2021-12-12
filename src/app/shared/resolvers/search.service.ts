import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Resolve,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SearchService implements Resolve<any> {
  constructor(private router: ActivatedRoute, private afS: AngularFirestore) {}

  async resolve(router: ActivatedRouteSnapshot) {
    // eslint-disable-next-line prefer-const
    let uids = [];
    const ville = router.paramMap.get('ville');
    const prestation = router.paramMap.get('prestation');
    const date = new Date(Date.parse(router.paramMap.get('date')));
    // eslint-disable-next-line radix
    const plage = parseInt(router.paramMap.get('plage'));

    console.log({
      ville,
      prestation,
      date:
        date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear(),
      plage,
    });

    // this.getMonth() + 1 + '/' + this.getDate() + '/' + this.getFullYear();

    return await this.afS
      .collection(
        'planning',
        (ref) => ref.where('date', '==', date)
        // .where('plage[plage-1].checked', '==', true)
      )
      /*this.afS
      .collection('prestation-coiffeuse', (ref) =>
        ref.where('prestation', '==', prestation)
      )*/
      .get();

    // console.log(test);
    // test.forEach((elt) => {
    //   elt.docs.forEach((res: any) => {
    //     // console.log(res.data())
    //     const data = res.data();
    //     console.log(data);
    //     if (data.plage[plage - 1].checked) {
    //       uids.push(data.uid);
    //     }
    //   });
    //   console.log(uids);
    //   if (uids.length !== 0) {
    //     uids.forEach((uid: string) => {
    //       const pres = this.afS
    //         .collection('prestation-coiffeuse', (ref) =>
    //           ref.where('prestation', '==', prestation).where('uid', '==', uid)
    //         )
    //         .get();
    //       console.log(pres);
    //       let i = 0;
    //       pres.forEach((elt1) => {
    //         elt1.docs.forEach((res1: any) => {
    //           i += 1;
    //           console.log(res1.data());
    //         });
    //       });
    //       console.log(i);
    //     });
    //   }
    // });
    return;
  }

  async search(date: Date, plage: number) {
    const planning = await this.afS.collection('planning', (ref) =>
      ref.where('date', '==', date).where('plage[plage-1].checked', '==', true)
    );
  }
}
