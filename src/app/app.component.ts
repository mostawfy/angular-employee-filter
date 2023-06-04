import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { GlobalLoadingService } from './shared/services/global-loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    public globalLoadingService: GlobalLoadingService,
    private cdf: ChangeDetectorRef
  ) {}

  isLoading$;

  ngOnInit(): void {
    this.isLoading$ = this.globalLoadingService.getLoading();
    this.cdf.detectChanges();
  }
}
