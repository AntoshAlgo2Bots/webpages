let x=` <div class="flex flex-wrap items-center gap-x-3 border-t mt-3 pt-3 border-gray-900">
                        <div>
                            <input id="link-checkbox" type="checkbox" value=""
                                class="w-3 h-3 text-blue-600 bg-gray-100 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:border-gray-600">
                        </div>
                        <div class="">
                          
                            <input type="text" name="email" id="email"
                                class="w-16 rounded-md border text-xs border-gray-900 bg-white py-3 pl-2 text-[#6B7280] h-6 outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                        <div class="">
                       
                            <input type="text" name="email" id="email"
                                class="w-28 rounded-md border text-xs border-gray-900 bg-white py-3 pl-2 text-[#6B7280] h-6 outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                        <div class="">
                        
                            <input type="text" name="email" id="email"
                                class="w-28 rounded-md border text-xs border-gray-900 bg-white py-3 pl-2 text-[#6B7280] h-6 outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                        <div class="">
                         
                            <input type="text" name="email" id="email"
                                class="w-28 rounded-md border text-xs border-gray-900 bg-white py-3 pl-2 text-[#6B7280] h-6 outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                        <div class="">
                           
                            <input type="text" name="email" id="email"
                                class="w-28 rounded-md border text-xs border-gray-900 bg-white py-3 pl-2 text-[#6B7280] h-6 outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                        <div class="">

                            <input type="text" name="email" id="email"
                                class="w-16 rounded-md border text-xs border-gray-900 bg-white py-3 pl-2 text-[#6B7280] h-6 outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                        <div class="">
                            <input type="text" name="email" id="email"
                                class="w-28 rounded-md border text-xs border-gray-900 bg-white py-3 pl-2 text-[#6B7280] h-6 outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                        <div class="">
                            <input type="text" name="email" id="email"
                                class="w-28 rounded-md border text-xs border-gray-900 bg-white py-3 pl-2 text-[#6B7280] h-6 outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>`


function duplicate_field() {
    let checkbox = document.getElementById('link-checkbox');
    let input_field = document.getElementById('input_field');

    if (checkbox.checked) {
        input_field.innerHTML += x;
    } else {
        console.log("without check");
    }

    console.log("finish");
}
