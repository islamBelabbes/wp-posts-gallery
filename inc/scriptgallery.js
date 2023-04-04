const ajax_fetch = (cat, paged, more) => {
  if (!more) {
    document.querySelector(".wp-gallery-items-loding").style.display = "flex";
  }
  document.querySelector(".loadmore").style.display = "none";
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
        my_data_page: paged ? paged : 1,
        my_data_cat: cat ? cat : "",
      },

      success: function (response) {
        resolve(response);
        [...document.querySelectorAll(".tab")].forEach((disabled) => {
          disabled.disabled = false;
        });
        document.querySelector(".loadmore").style.display = "flex";
        document
          .querySelector(".loadmore button")
          .setAttribute("data-max-page", response.max_pages);
        document.querySelector(".loadmore button").textContent = "Load More";
        document.querySelector(".loadmore button").disabled = false;
      },

      error: function (error) {
        reject(error);
      },
    });
  });
};
// data_max = 2;
jQuery(document).ready(function ($) {
  ajax_fetch()
    .then((response) => {
      console.log(response);
      wp_grid_masonry(response.items);
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
          document
            .querySelector(".loadmore button")
            .setAttribute("data-current-page", 1);
          tabs.forEach((currentItem) => {
            currentItem.classList.remove("wp-gallery-active");
          });
          tab.classList.add("wp-gallery-active");
          // if (tab.getAttribute("data-cat") === "all") {
          //   display_items(response_gallery_data);
          //   document
          //     .querySelector(".loadmore button")
          //     .setAttribute("data-current-cat", "");
          //   return;
          // }
          ajax_fetch(tab.getAttribute("data-cat-id"))
            .then((response) => {
              document
                .querySelector(".loadmore button")
                .setAttribute(
                  "data-current-cat",
                  tab.getAttribute("data-cat-id") === null
                    ? ""
                    : tab.getAttribute("data-cat-id")
                );

              display_items(response.items);
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
  const display_items = (src, more) => {
    // get items div //
    const items_div = document.querySelector(".masonry");
    if (!more) {
      items_div.innerHTML = "";
    }
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
  const loadmore = () => {
    const button = document.querySelector(".loadmore button");
    button.addEventListener("click", () => {
      if (
        button.getAttribute("data-current-page") >=
        button.getAttribute("data-max-page")
      ) {
        button.textContent = "you have reached the maximum data";
        button.disabled = true;
        return;
      }
      button.setAttribute(
        "data-current-page",
        parseInt(button.getAttribute("data-current-page")) + 1
      );
      ajax_fetch(
        button.getAttribute("data-current-cat"),
        button.getAttribute("data-current-page"),
        true
      )
        .then((response) => {
          display_items(response.items, true);
          if (
            button.getAttribute("data-current-page") >=
            button.getAttribute("data-max-page")
          ) {
            button.textContent = "you have reached the maximum data";
            button.disabled = true;
            return;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };
  loadmore();
};
