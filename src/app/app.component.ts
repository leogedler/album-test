import { AppService } from './app.service';
import { Component, OnInit } from '@angular/core';
import { Album } from './shared/models/album';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  album1:Album[] =[];
  album1Id:number;

  album2:Album[] =[];
  album2Id:number;

  album3:Album[] =[];
  album3Id:number;

  constructor(
    private appServive: AppService
  ){}

  ngOnInit(){
    this.appServive.get().subscribe((response:Album[])=>{
      this.album1Id = response[response.length-1]['albumId'];

      this.album1 = response.filter((res: Album) => res.albumId === this.album1Id);

      this.album2Id = this.album1Id - 1;

      this.album2 = response.filter((res: Album) => res.albumId === this.album2Id);

      this.album3Id = this.album1Id - 2;

      this.album3 = response.filter((res: Album) => res.albumId === this.album3Id);

    },(error:any)=>{
      console.log('Error', error);
    })
  }

}
