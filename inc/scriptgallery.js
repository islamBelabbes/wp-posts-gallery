const ajax_fetch = (count, cat) => {
  document.querySelector(".wp-gallery-items-loding").style.display = "flex";
  [...document.querySelectorAll(".tab")].forEach((disabled) => {
    disabled.disabled = true;
  });
  return new Promise((resolve, reject) => {
    jQuery.ajax({
      url: my_ajax_object.ajax_url,
      type: "POST",
      dataType: "json",
      data: {
        action: "wp_gallery_action",
        my_data_limit: count,
        my_data_cat: cat,
      },
      success: function (response) {
        resolve(response);
        [...document.querySelectorAll(".tab")].forEach((disabled) => {
          disabled.disabled = false;
        });
      },
      error: function (error) {
        reject(error);
      },
    });
  });
};
data_max = 40;
jQuery(document).ready(function ($) {
  ajax_fetch(data_max, "")
    .then((response) => {
      wp_grid_masonry(response);
      document.querySelector(".allitems").click();
    })
    .catch((error) => {
      console.log(error);
    });
});
const wp_grid_masonry = (response_gallery_data) => {
  // ---------------------- tabs function ----------------------  //
  const tabs = () => {
    // display the tabs //
    const display_tabs = () => {
      // tabs div //
      const tabs_div = document.querySelector(".tabs");
      // get all the categories  [unique only ] //
      const unique_categorys_set = new Set(
        response_gallery_data.map((category) => category.img_cat)
      );
      const filteredunique_categorys = [...unique_categorys_set].filter(
        (obj, index, self) => {
          return index === self.findIndex((t) => t.name === obj.name);
        }
      );
      const unique_categorys = new Set(filteredunique_categorys);
      // map and display //
      const tabs_display = [...unique_categorys].map((item) => {
        return `
        <button class="filter-tab tab" data-cat-id=${item.id} data-cat=${item.name}>${item.name}</button>
        `;
      });
      tabs_div.innerHTML += tabs_display.join("");
    };
    const tabs_function = () => {
      // get all the tabs //
      const tabs = document.querySelectorAll(".tab");
      tabs.forEach((tab) => {
        tab.addEventListener("click", (e) => {
          tabs.forEach((currentItem) => {
            currentItem.classList.remove("wp-gallery-active");
          });
          tab.classList.add("wp-gallery-active");
          if (tab.getAttribute("data-cat") === "all") {
            // current_query = [response_gallery_data];
            display_items(response_gallery_data);
            return;
          }
          ajax_fetch(data_max, tab.getAttribute("data-cat-id"))
            .then((response) => {
              display_items(response);
            })
            .catch((error) => {
              console.log(error);
            });
        });
      });
    };
    display_tabs();
    tabs_function();
  };
  const display_items = (src) => {
    // get items div //
    const items_div = document.querySelector(".masonry");
    items_div.innerHTML = "";
    const template = document.querySelector("[data-gallery-template]");
    src.forEach((item) => {
      const clone = template.content.cloneNode(true).children[0];
      clone.querySelector("a").href = item.post_url;
      clone.querySelector("img").src = item.img_src;
      clone.setAttribute("data-cat", item.img_cat.name);
      items_div.appendChild(clone);
    });
    document.querySelector(".wp-gallery-items-loding").style.display = "none";
  };

  tabs();
};
