import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  public imgUrl: string = '../../../assets/img/rtx3080ti.jpg';
  public price: number = 60050;
  public bodyContent: string = 'Asus PCI-Ex GeForce RTX 3080 Ti TUF Gaming OC 12GB GDDR6X (384bit)';

  constructor() { }

  ngOnInit(): void {
  }

}
