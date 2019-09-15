import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RankingService} from './ranking.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {
  constructor(private route: ActivatedRoute, private productSerice: RankingService, private spinner: NgxSpinnerService) {
  }

  ngOnInit() {
  }
}
