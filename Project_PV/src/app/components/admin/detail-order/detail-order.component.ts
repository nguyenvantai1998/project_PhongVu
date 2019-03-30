import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../services/order/order.service';
import { Order } from 'src/app/models/order.model';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-detail-order',
  templateUrl: './detail-order.component.html',
  styleUrls: ['./detail-order.component.css']
})
export class DetailOrderComponent implements OnInit {
  public DetailOrder: Order = {};
  comp = "SUCCESS";
  constructor(private orderService: OrderService,
    private activatedRouteService: ActivatedRoute) { }

  loadOrderDetail() {
    this.activatedRouteService.params.subscribe((data: Params) => {
      let id = data['id'];
      this.orderService.getIdOrderDetail(id).subscribe(data => {
        this.DetailOrder = data;
      })
    })
  }

  ngOnInit() {
    this.loadOrderDetail()
  }
}
