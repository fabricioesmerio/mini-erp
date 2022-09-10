import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MenuComponent } from './menu/menu.component';



@NgModule({
    declarations: [
        MenuComponent
    ],
    imports: [
        CommonModule,
        MenubarModule,
        InputTextModule,
        ButtonModule,
        
    ],
    exports: [
        MenubarModule,
        InputTextModule,
        ButtonModule,
        
        MenuComponent
    ]
})
export class SharedModule { }
