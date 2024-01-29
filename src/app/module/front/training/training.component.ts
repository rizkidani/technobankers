import { Component, ElementRef, ViewChild } from '@angular/core';
import 'flowbite';
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap';
@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent {

   // Deklarasikan indeks tab aktif
   activeTabIndex: number = 0;

   // Menyimpan referensi ke elemen <ul>
   @ViewChild('tabList')
  tabList!: ElementRef;

   // Fungsi untuk pindah ke tab sebelumnya
   previousTab() {
       if (this.activeTabIndex > 0) {
           this.activeTabIndex--;
       }
   }

   // Fungsi untuk pindah ke tab berikutnya
   nextTab() {
       const numberOfTabs = this.tabList.nativeElement.children.length;
       if (this.activeTabIndex < numberOfTabs - 1) {
           this.activeTabIndex++;
       }
   }

}
