import { AbstractRestService } from 'src/app/services/genericservice.service';
import { SecureStorageService } from './../../services/api/secure-storage.service';

import Swal from 'sweetalert2';
import Toast from 'sweetalert2';

interface Option {
    headers: object;
    params: object | null | undefined;
}
export class DynamicTableCrud<T> {
    data !: any;
    numberItems !: number;
    protected options !: Option;
   


    constructor(protected service: AbstractRestService<T>, protected actionUrl: string,
                protected secureStorageService: SecureStorageService) {
    }

    async getData(params?: object) {
        console.log(this.options);
        if (this.options === undefined){
        const access = localStorage.getItem('access');
        console.log(access)
        if (access !== null){
                this.options = {
                    headers: {Authorization : `Bearer ${this.secureStorageService.getToken(access)}`},
                    params: null
                };+
                console.log(this.options);
            }
        }
        console.log(this.options);
        if (params !== null && params !== undefined){
            this.options.params = params;
        }
        this.data = await this.service.list(this.actionUrl, this.options);
        console.log(this.data);
        this.numberItems = this.data.length;
        

        
               
                
                }

    delete(id: number | undefined, index: number): void {
        console.log(id);
        console.log(index)
        if (id !== undefined) {

             Swal.fire({
                    title: 'هل أنت متأكد أنك تريد حذف هذا المستعمل',
                    // text: 'هل أنت متأكد أنك تريد حذف هذا الطبيب؟',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'حذف',
                    cancelButtonText: 'إلغاء',
                    confirmButtonColor: '#34c38f',
                    cancelButtonColor: '#f46a6a',
                    //position:
                  }).then((result) => {
                    if (result.value) {
                        if (id !== undefined) {
                            this.service.delete(this.actionUrl, id, this.options).then(async () => {
                                // this.data.splice(index, 1);
                                // this.numberItems--;
                                Swal.fire({
                                    toast: true,
                                    icon: 'success',
                                    title: 'تمت عملية الحذف بنجاح',
                                    iconColor: 'white',
                                    //position: 'top-center',
                                    showConfirmButton: false,
                                    timer: 3000,
                                    customClass: {
                                      popup: 'colored-toast',
                                    },
                                  });
              
                                this.getData()
                            });
                        }
                     
                    }
                  });
            
        }
    }
}

