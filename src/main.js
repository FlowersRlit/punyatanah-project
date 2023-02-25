import data from './dummy/data.js'

const container = document.getElementById('card-container')


data.data.forEach(element => {
    container.innerHTML += `
    <div class="p-1 w-full hover:scale-105 cursor-pointer">
        <div class="
        flex flex-row sm:flex-col lg:flex-row content-center justify-between 
        rounded-lg shadow-lg overflow-hidden border bg-white
        h-full">
            <div class='w-2/5 sm:w-full lg:w-2/5 overflow-hidden'>
                <img class="object-cover h-full w-full"
                src="${element.ImagePath}" alt="">
            </div>    
        
            <div class="flex flex-col justify-between w-3/5 sm:w-full min-w-md"> 
                <div class="p-4">
                    <h4 class="font-semibold text-lg sm:text-2xl text-orange1">${
                      element.LuasTanah
                    } m²</h4>
                    <h4 class="font-medium text-lg sm:text-xl">Rp ${element.Harga.toLocaleString(
                      ["ban", "id"]
                    )}</h4>
                    <h4 class="font-base text-base text-gray1">${
                      element.Kecamatan
                    }, ${element.Kota}</h4>
                </div>
                <div>
                    <div class="bg-hijau1 min-h-fit w-full py-3 px-4 flex align-center justify-between">
                        <a class="text-white text-sm sm:text-base font-medium" href="#">${
                          element.Penjual
                        }</a>
                        <button type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgb(255, 255, 255);transform: ;msFilter:;"><path d="M5 18v3.766l1.515-.909L11.277 18H16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h1zM4 8h12v8h-5.277L7 18.234V16H4V8z"></path><path d="M20 2H8c-1.103 0-2 .897-2 2h12c1.103 0 2 .897 2 2v8c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2z"></path></svg></box-icon>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
});
