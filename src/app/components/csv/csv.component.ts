import { Component, OnInit, ViewChild } from '@angular/core';
import { CsvRercord } from 'src/app/class/csvrecord';

@Component({
  selector: 'app-csv',
  templateUrl: './csv.component.html',
  styleUrls: ['./csv.component.css']
})
export class CsvComponent implements OnInit {

  title = 'Angular7AppReadCSV';  
  
  public records: any[] = [];  
  @ViewChild('csvReader',{static:false}) csvReader: any; 

  constructor() { }

  ngOnInit() {
  }

  uploadListener($event: any): void {  
  
    let text = [];  
    let files = $event.srcElement.files;  
  
    if (this.isValidCSVFile(files[0])) {  
  
      let input = $event.target;  
      let reader = new FileReader();  
      reader.readAsText(input.files[0]);  
  
      reader.onload = () => {  
        let csvData = reader.result;  
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);  
  
        let headersRow = this.getHeaderArray(csvRecordsArray);  
  
        this.records = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);  
      };  
  
      reader.onerror = function () {  
        console.log('error is occured while reading file!');  
      };  
  
    } else {  
      alert("Please import valid .csv file.");  
      this.fileReset();  
    }
    
  }



  getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {  
    let csvArr = [];  
  
    for (let i = 1; i < csvRecordsArray.length; i++) {  
      let curruntRecord = (<string>csvRecordsArray[i]).split(',');
      console.log(curruntRecord);
      let hola=curruntRecord[0].split(',')
      console.log(hola)  
      if (curruntRecord.length == headerLength) {  
        let csvRecord: CsvRercord = new CsvRercord();  
        csvRecord.id = curruntRecord[0];  
        csvRecord.firstName = curruntRecord[1];  
        csvRecord.lastName = curruntRecord[2];  
        csvRecord.age = curruntRecord[3];  
        csvRecord.position = curruntRecord[4];   
        csvArr.push(csvRecord);  
      }  
    }  
    return csvArr;  
  }  
  
  isValidCSVFile(file: any) {  
    return file.name.endsWith(".csv");  
  }  
  
  getHeaderArray(csvRecordsArr: any) {  
    let headers = (<string>csvRecordsArr[0]).split(',');  
    let headerArray = [];  
    for (let j = 0; j < headers.length; j++) {  
      headerArray.push(headers[j]);  
    }  
    return headerArray;  
  }  
  
  fileReset() {  
    this.csvReader.nativeElement.value = "";  
    this.records = [];  
  } 

}
