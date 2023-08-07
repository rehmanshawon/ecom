import { menuItems } from "@/layouts/menuItems";
import MenuItems from "./MenuItems";
import { categoriesService, alertService } from "services";
import { useEffect, useState } from "react";
import { set } from "react-hook-form";
/*
{
    title: "Categories",
    url: "/categories",
    submenu: [
      {
        title: "Rod",
        url: "rod",
        submenu: [
          {
            title: "BSRM",
            url: "bsrm",
            submenu: [
              {
                title: "Grade 60",
                url: "grade60",
              },
              {
                title: "Grade 72.5",
                url: "grade72_5",
              },
              {
                title: "Grade 80",
                url: "grade80",
              },
            ],
          },
          {
            title: "AKS",
            url: "aks",
            submenu: [
              {
                title: "Grade 60",
                url: "grade60",
              },
              {
                title: "Grade 72.5",
                url: "grade72_5",
              },
              {
                title: "Grade 80",
                url: "grade80",
              },
            ],
          },
        ],
      },
      {
        title: "Stone",
        url: "stone",
        submenu: [
          {
            title: "Vaita Vanga",
            url: "vaita-vanga",
          },
          {
            title: "Boulder Vanga",
            url: "boulder-vanga",
          },
          {
            title: "L/C Stone White",
            url: "lc-stone-white",
          },
          {
            title: "L/C Stone Black",
            url: "lc-stone-black",
          },
          {
            title: "Singles",
            url: "singles",
          },
        ],
      },
      {
        title: "Chemical",
        url: "chemical",
        submenu: [
          {
            title: "B.S.F",
            url: "bsf",
          },
          {
            title: "Creiso",
            url: "creiso",
          },
        ],
      },
      {
        title: "Cement",
        url: "cement",
        submenu: [
          {
            title: "Holcim",
            url: "holcim",
          },
          {
            title: "Scan/Rubi",
            url: "scan-rubi",
          },
          {
            title: "Premier",
            url: "premier",
          },
        ],
      },
      {
        title: "Centering & Shuttering",
        url: "centering-shuttering",
        submenu: [
          {
            title: "GI Wire",
            url: "gi-wire",
          },
          {
            title: "Nail",
            url: "nail",
          },
          {
            title: "Aam Wood",
            url: "aam-wood",
          },
          {
            title: "Steel Sheet",
            url: "steel-sheet",
          },
          {
            title: "Bamboo",
            url: "bamboo",
          },
          {
            title: "Proops",
            url: "proops",
          },
        ],
      },
    ],
  },
*/
const Navbar = () => {
  const [categories, setCategories] = useState();

  const getCategories = async () => {
    const data = await categoriesService.getAll();

    const catMenu = {
      title: "Categories",
      url: "/categories",
      submenu: data?.map((item) => {
        return {
          title: item.category_name,
          url: item.category_name,
          submenu: item.Products.map((product) => {
            return { title: product.brand, url: product.brand };
          }),
        };
      }),
    };
    setCategories(catMenu);
    if (!menuItems.find((item) => item.title === "Categories")) {
      menuItems.push(catMenu);
    }
  };
  useEffect(() => {
    getCategories();
  }, []);

  // useEffect(() => {
  //   if (categories.length > 0) {
  //     menuItems.push(categories);
  //     console.log("cat", menuItems);
  //   }
  // }, [categories]);

  //console.log("cat", menuItems);
  return (
    <nav>
      <ul className="menus">
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
