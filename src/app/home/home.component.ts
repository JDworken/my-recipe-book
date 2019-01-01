import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

// import * as imagepicker from 'nativescript-imagepicker';
import { requestPermissions, takePicture } from 'nativescript-camera';
import { ImageAsset } from 'tns-core-modules/image-asset';
import { DrawerService } from '../shared/drawer/drawer.service';

const initialSource = [
  {title: 'Test1'},
  {title: 'Test2'},
  {title: 'Test3'},
  {title: 'Test4'},
  {title: 'Test5'},
  {title: 'Test6'},
  {title: 'Test7'},
  {title: 'Test7'},
  {title: 'Test7'},
  {title: 'Test7'},
  {title: 'Test7'},
  {title: 'Test7'},
  {title: 'Test7'},
  {title: 'Test7'},
  {title: 'Test7'},
  {title: 'Test7'},
  {title: 'Test7'},
];
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  public title = 'MyRecipeBook';
  // public imageAssets = [];
  // public imageSrc: any;
  // public isSingleMode: boolean = true;
  // public thumbSize: number = 80;
  // public previewSize: number = 300;
  // public saveToGallery = false;
  // public keepAspectRatio = true;
  // public width = 320;
  // public height = 240;
  // public cameraImage: ImageAsset;
  // public actualWidth: number;
  // public actualHeight: number;
  // public scale = 1;
  // public labelText: string;

  source: any[];

  constructor(private drawerServ: DrawerService) {
    this.source = [];

    initialSource.forEach(row => {
      this.source.push(row);
    });
    console.log(this.source);
  }

  ngOnInit() {
  }

  onLoaded(event: any) {
    // console.log(event);
  }

  onItemLoading(event: any) {
    // console.log(event);
  }

  onItemTap(event: any) {
    // console.log(event);
  }
  // onSelectSingleTap() {
  //   this.isSingleMode = true;

  //   let context = imagepicker.create({
  //     mode: 'single'
  //   });

  //   this.startSelection(context);
  // }

  // public onSelectMultipleTap() {
  //   this.isSingleMode = false;

  //   let context = imagepicker.create({
  //       mode: "multiple"
  //   });
  //   this.startSelection(context);
  // }

  // public onTakePictureTap() {
  //   requestPermissions()
  //   .then(() => {
  //     takePicture({saveToGallery: false, keepAspectRatio: true})
  //     .then((imageAsset) => {
  //       this.cameraImage = imageAsset;

  //       const that = this;

  //       imageAsset.getImageAsync(function(nativeImage, ex) {
  //         if (ex instanceof Error) {
  //           throw ex;
  //         } else if (typeof ex === 'string') {
  //           throw new Error(ex);
  //         }

  //         if (imageAsset.android) {
  //           that.scale = nativeImage.getDensity(); // android.util.DisplayMetrics.DENSITY_DEFAULT;
  //           that.actualWidth = nativeImage.getWidth();
  //           that.actualHeight = nativeImage.getHeight();
  //         } else {
  //           that.scale = nativeImage.scale;
  //           that.actualWidth = nativeImage.size.width * that.scale;
  //           that.actualHeight = nativeImage.size.height * that.scale;
  //         }

  //         that.labelText = `Displayed Size: ${that.actualWidth}x${that.actualHeight} with scale ${that.scale}\n` +
  //           `Image Size: ${Math.round(that.actualWidth / that.scale)}x${Math.round(that.actualHeight / that.scale)}`;

  //         console.log(`${that.labelText}`);
  //       });
  //     }, (error) => {
  //       console.log('Error: ' + error);
  //     });
  //   },
  //   () => alert('permissions rejected')
  //   );
  // }

  // private startSelection(context: imagepicker.ImagePicker){
  //   let that = this;

  //   context
  //   .authorize()
  //   .then(() => {
  //     that.imageAssets = [];
  //     that.imageSrc = null;
  //     return context.present();
  //   })
  //   .then((selection) => {
  //     console.log('Selection done: ' + JSON.stringify(selection));
  //     that.imageSrc = that.isSingleMode && selection.length > 0 ? selection[0] : null;

  //     selection.forEach(function (element){
  //       element.options.width = that.isSingleMode ? that.previewSize : that.thumbSize;
  //       element.options.height = that.isSingleMode ? that.previewSize : that.thumbSize;
  //     });

  //     that.imageAssets = selection;
  //   })
  //   .catch(function(e){
  //     console.log(e);
  //   });
  // }

  onNavBtnTap() {
    this.drawerServ.show();
  }
}
