import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {

  //time takes place
  public Happenning: any = {
    time: `11:00`,
    content: `Đang diễn ra`
  }
  public Upcoming: any = {
    time: `12:00`,
    content: `Sắp diễn ra`
  }
  public Upcoming2: any = {
    time: `13:00`,
    content: `Sắp diễn ra`
  }
  public Tomorrow: any = {
    time: `07:00`,
    content: `Ngày mai`
  }

  // row title
  public rowTitle: any = {
    title: `Tivi giá tốt - chốt liền tay`,
    description: `Đừng vội mua TV nếu chưa xem giá tại Phong Vũ`
  }

  // row banner
  public rowBanner: any = {
    images: [
      "pv-banner-390x190-80cf8.png",
      "pv-banner-390x190-39bc6.png",
      "pv-banner-390x190-80cf8.png"
    ]
  }


  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
  }



}
