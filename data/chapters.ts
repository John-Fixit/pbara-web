import type { Chapter } from "@/types";

const CHAPTER_IMAGES = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA7LfeVur66kjq-glWTq0L6Y7gJtMgY2KceD0ZttN-vkRo1oKpMizgRzLMIeHuyB8ACzw4CIqPrRKj1_UDC_7OwxW-AZoS6vyOv5F2Z-zJZ2muPKNq2mXLHx1p93ghdyWl_KfJaITGGiD9_xMSbH8UkkAqZSdRUmkl1HbvgDB-LW9L0Hu5Juh5wh-8YqF-haqLszXOBjAoYGDqPUJbDFsVfxvIrZ8HZMFbngS-HGWmVB0j-tab4uNWcllFyuA6NXGcEcUdVwFcFlzc",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAo-jZiDzL6bI-54TrUkQ59uUTnh7l6fZsSfmHzazwv-EeNJqo9pgLI1iPSVLofCLApRnzPD6PUOkRxruRdz1ZRbw49Zz3pa0hCDY5tvkFYvqN6HQpA400xCY8Z7NXKA2BVPBUR0hPFJ_rG_n2OQITIcyDD9W2PjdmwpdDTqApzAP9Ym25OyNfR2hOuGvfwxMghmu00TWW9FxTWghcsbqOnaILVU7Ry54IB_kEVEnQoNYl9KInKr-ZkFacJwhpu98_EHG_pfQNpmRo",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAGjaqp1OKnue4ZnX5Lz8DyyIcvKxiC5suF23egP13wCjOYbJsQSj0qzMDGULB2apAwz9bbZ-4kopIOjAHWdnkaLPf-hG5nQ3NnzMSTPq7zSEUXll5xVeV2qJ3hhmGE6oFuSF29GjbJjsuJfN6iZDNEOEVxaeUyov-s4vrWqY485jkCiVL7JP-drAEfrrrGHN32OPqU5Z_Z2GZEmngVzFZLlSY-tU3WSBE3AxIZH1Hsn051-T_mtDx_uArwC3i6LDmbOeypcTB87JM",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAGzRKHzgZ4XMbb4Dpqg2f43EfUqNU1bC7D8DY9ar0rH8dly4DKqam7H7aU1oDmIWWtmdjLaz480SQdi8WrnSFGD4IfJKxhAyUIGvud6yiNn93CgGHjNCuO446i3CDot8TQGbNNJ5UCg37Zzv9iP2gHDGWSkr726Yr6nLXtUjsZytMAzVDKxpYGeuqMPVVUHZQsJTOLMYtLY2BYinUIOAV54PXMdMJH7QAFXK7aqCX_-2qkPYgRT6B5y2eHK_kHiBV24pe6POdA5z8",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAzIvm2IcIPADA7X29GAU5lhT6_HNp4yOnXGubSiZMSjxzrDFRLU4zhXVp3xbvHCdvzHc5CM1blgOMJrqYKifoxj6O7vip7pqTCgQd_9uwUsFGzEfi5xOj5Oqt1uBGAGWmXhYgLPMdeeJY748p761CUxs-Mlwi7DSDl9_GRQ906J7pAKcMl3qkWdp3yW9t_rshMqQdjkJkq_X2VgGYk2SdRmEVZaCmOB5LKuZqd7Lx-J9abGAXBQvdsl9Gpn42no1Pimz-4A9Y-N10",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCnuwgEW8FbGvpDPravZj13n6RlWGVYDhvSVw8DA2F5YvbE4jpN5noYfnn_lnM3UuTDwNHLDeCU7250woCQWqzMpXBHcUyrXpuBfdWEESmdJl_KiVLHAZX6421IR8ORgwNgIFuQmOutjxL93vUTpiBVYXXOVGYFB77R8H11Xq05fV3VasbGZJxZ7uQS6h1_cWaUO-TPiXSydvbKpQrgfUVMr4qlD-9z7ptJOalZ-X1irmdgAZhVU3xVRKlYEHR8PADrAnZWQbTD4_A",
] as const;

export const chapters: Chapter[] = [
  { id: "1", chapterName: "Judah Chapter", churchName: "Zion Baptist Church", commander: "John Doe", unit: "junior", status: "active", image: CHAPTER_IMAGES[0] },
  { id: "2", chapterName: "Ebenezer Unit", churchName: "Grace Baptist Church", commander: "Sarah Smith", unit: "primary", status: "active", image: CHAPTER_IMAGES[1] },
  { id: "3", chapterName: "Covenant Chapter", churchName: "Faith Assembly", commander: "James Brown", unit: "senior", status: "active", image: CHAPTER_IMAGES[2] },
  { id: "4", chapterName: "Bethel Unit", churchName: "Hope Chapel", commander: "David Wilson", unit: "junior", status: "active", image: CHAPTER_IMAGES[3] },
  { id: "5", chapterName: "Shiloh Chapter", churchName: "Victory Baptist", commander: "Michael Clark", unit: "senior", status: "active", image: CHAPTER_IMAGES[4] },
  { id: "6", chapterName: "Antioch Unit", churchName: "Unity Church", commander: "Robert Taylor", unit: "primary", status: "active", image: CHAPTER_IMAGES[5] },
];
