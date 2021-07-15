import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { MenuComponent } from './layout/menu/menu.component';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { CarouselComponent } from './layout/carousel/carousel.component';
import { CardComponent } from './inicio/card/card.component';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

@NgModule({
  imports: [
    CommonModule,
    NzMenuModule,
    NzIconModule,
    NzCarouselModule,
    NzCardModule,
    NzAvatarModule,
    NzFormModule,
    NzButtonModule,
    NzInputModule,
  ],
  declarations: [
    LayoutComponent,
    MenuComponent,
    CarouselComponent,
    CardComponent,
  ],
  exports: [LayoutComponent, CardComponent],
})
export class ComponentsModule {}
