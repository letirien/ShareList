import {Injectable} from '@angular/core'
import { Card } from '../models/card.model'

@Injectable({
    providedIn: 'root'
})
// Services diff de Component n'a pas de méthode OnInit
export class PresentService{
    
    presents:Card[] = [
        {
          id: 1, 
          userId: 1,
          familyId:1,
          title: "Mon premier voeu",
          description: "Nintendo Switch (modèle OLED) avec station d’accueil et manettes Joy-Con blanches", 
          msg: "J'aimerai vraiment avoir cette console de jeu vidéal",
          createdDate: new Date(),
          price: 319.99,
          creator: "Titien",
          link: "https://www.fnac.com/Nintendo-Switch-modele-OLED-avec-station-d-accueil-et-manettes-Joy-Con-blanches/a15620618/w-4#int=S:Top%20ventes%20Consoles|Nintendo%20Switch|470487|15620618|BL2|L1",
          img:"https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_2.0/c_scale,w_500/ncom/en_US/switch/videos/heg001-07060600/posters/oled-model",
          review: {
            for: {
              count: 5, 
              user: ''
            },
            against:{
              count: 0, 
              user: ''
            }
          },
          visible: true,
        
      },
      {
        id: 2, 
        userId: 1,
        familyId:1,
        title: "Mon second voeu",
        description: "APK mini", 
        msg: "J'aimerai vraiment avoir ce petit clavier midi",
        createdDate: new Date(),
        price: 80,
        creator: "Titien",
        link: "https://www.amazon.fr/AKAI-Professional-Mini-R%C3%A9tro%C3%A9clair%C3%A9s-Potentiom%C3%A8tres/dp/B0886ZPWC8/ref=sr_1_5?keywords=clavier+midi&qid=1680368953&sr=8-5",
        img:"https://m.media-amazon.com/images/I/717qmGlA7ZL._AC_SL1500_.jpg",
        review: {
          for: {
            count: 0, 
            user: ''
          },
          against:{
            count: 0, 
            user: ''
          }
        },
        visible: true,
      
    },
    {
      id: 3, 
      userId: 1,
      familyId:1,
      title: "Mon troisième voeu",
      description: "MacBook Pro 13 pouces - Gris sidéral", 
      msg: "J'aimerai vraiment avoir ça",
      createdDate: new Date(),
      price: 1600,
      creator: "Titien",
      link: "https://www.apple.com/fr/shop/buy-mac/macbook-pro/13-pouces-gris-sid%C3%A9ral-puce-apple-m2-avec-cpu-8-c%C5%93urs-et-gpu-10-c%C5%93urs-256go",
      img:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-spacegray-gallery2-202206_GEO_EMEA_LANG_FR?wid=2000&hei=1537&fmt=jpeg&qlt=95&.v=1664495933136",
      review: {
        for: {
          count: 3, 
          user: ''
        },
        against:{
          count: 8, 
          user: ''
        }
      },
      visible: true,
    
  },
    ]
    getAllPresents(): Card[]{
      return this.presents
    }

    voteById(presentId:Number,vote: 'for' | 'against'): void{
      const present = this.presents.find(el => el.id === presentId)
      const voteForNb =  present?.review[vote].count
      console.log(voteForNb);
      
      if(present){
        // when Api Implemented =>  Update Api
        // TODO: Add logic and boolean for User table if already Voted block vote when Api Ok
        if(vote){
          present.review[vote].count ++
          }
      }else{
        throw new Error("l'elément voté, n'éxiste pas ou plus'")
      }
      
    }
}