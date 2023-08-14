import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SearchComponent),
      multi: true,
    }
  ]
})
export class SearchComponent implements ControlValueAccessor {

  value: string;

  private onChangeCallback: (_: any) => void = () => { };

  onChange(val: any) { 
    this.onChangeCallback(val); 
  }

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn: any) { this.onChange = fn; }

  registerOnTouched(fn: any) {
    this.onChangeCallback = fn;
  }

  keyUp(value: string): void {
    this.value = value;
  }

}
