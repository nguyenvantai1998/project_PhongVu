import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrderService } from '../../../services/order/order.service';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/order.model';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.css']
})
export class ListOrderComponent implements OnInit{
  public listOrder: Order = {};
  public comp = "SUCCESS";
  public orderComplete = {"status": "success"}
  public orderWait = {"status": "pending"}
  
  constructor(
    private orderService: OrderService,
    private router: Router
  ) { }
  ngOnInit() {
    this.loadOrderList();
  }
  loadOrderList() {
    this.orderService.getAllList().subscribe(data => {
      this.listOrder = data;
      console.log(this.listOrder)
    })
  }
 
  onSuccess(stt: string){
    if(stt=="SUCCESS"){
      return true;
    }else {
     return false;
    }
  }

  onCheckComplete(id: string) {
    this.orderService.checkOrder(this.orderComplete,id).subscribe(data=>{
      this.loadOrderList();
    },error=>{
      console.log(error);
    })
  }
  onCheckPending(id: string) {
    this.orderService.checkOrder(this.orderWait,id).subscribe(data=>{
      this.loadOrderList();
    },error=>{
      console.log(error);
    })
  }
}
