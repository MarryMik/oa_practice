const detail_butt1 = document.getElementsByClassName("product__href_details")[0];
        detail_butt1.addEventListener("click", function (e) {
            e.preventDefault();
            dataLayer.push({
                    'productCategory': 'wish',
                    'ageCategory': 'adult'
                })
                window.alert("Категорія товару - Wish, Вікова категорія - adult ");
        })
        const detail_butt2 = document.getElementsByClassName("product__href_details")[1];
        detail_butt2.addEventListener("click", function (e) {
            e.preventDefault();
            dataLayer.push({
                    'productCategory': 'greetings',
                    'ageCategory': 'child'
                })
                window.alert("Категорія товару - greetings, Вікова категорія - child ");
        })