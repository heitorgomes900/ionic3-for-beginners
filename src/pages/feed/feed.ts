import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from "../../providers/moovie/moovie";

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MoovieProvider
  ]
  
})
export class FeedPage {
  //public nome_usuario:string = "Teste Gomes";
  public objeto_feed = {
    titulo: "Heitor Gomes",
    data: "November 6, 1955",
    descricao: "Estou criando um app.",
    qntd_likes: 12,
    qntd_comments: 4,
    time_comment: "11h ago"
  }

  public lista_filmes = new Array<any>();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MoovieProvider) {
  }

  public somaDoisNumeros(n1:number,n2:number): void{
      alert(n1+n2);
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad FeedPage');
    //this.somaDoisNumeros(1,2);
    this.movieProvider.getLatestMovies().subscribe(
      data=>{
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        this.lista_filmes = objeto_retorno.results;
        
        console.log(objeto_retorno);
      }, error=>{
        console.log(error);
      }
    )
  }

}
