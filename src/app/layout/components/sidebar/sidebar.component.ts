import { AfterViewChecked, Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements AfterViewChecked {
  @ViewChild('drawer', { static: true }) drawer!: MatDrawer;

  ngAfterViewChecked(): void {
    setTimeout(() => {
      this.drawer.opened = true;
    }, 1);
  }

}
