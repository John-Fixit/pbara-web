import type { Executive } from "@/types";

const OFFICER_IMAGES = {
  samuel:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA-EmhIQ9KjBrDF7IClRUxPjEEUU1PUquTH9dpdRV3MCV0jyZqX_jqWem6_qD_oj7gAEo0l2xjzw_G1W7Ud7jSXOt3RD59fsrD16pKajGUWFSJ8aXb751O-vqcSL0HBZ2vH4n-ISpswynBzoSiA4b4EyQ6Wk9mNL97g4TQPe_nOiFxAPMO5OZAhx04ig9Ke0CU88wXy6VQprLM8-7R1OloyHjDJ3brXjPc9lM0pLoAOH2xabnJSajXi3EH_t43JKxOEMJvE51jIFPU",
  david:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDzg82eK5F4mthoyBKW0SuWWYwL1QNbtXGlJCFc8ZlWbK-7f0L5kP6cQTNdsASJnTYiZruCuS3pIjQUSUyTcVqr24ENHtSY7isSwnM5tCtVBQK9jfAKa9yZTCgKVjIXYHTDcMoe4pDhKg0chd3LW-azHIiyMG-ouo4Mllm9qsFrlwj6SW5h3Ew16xcaSTliH5RMbfhSX1NYZt-afrY6WS4TKRoYCtGFFw8IYiyNeNQn0mQfhMKO8ZOqNCN9Opujfx3wr9jm0XWcR4U",
  emmanuel:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDa29iJsrTaeF4ToSGo1fJNwdB-_wANbAmniKht3_pgDgAONShwlyrvRK5GuI-pGkt6xVcNj6kVHXJf7HDS4-ULK3LUh6LlvoPrU4r1Tdp0WkI7LLDYQ_MEUJmbXE7wVZY6ZmEKlBDkwWbq6lIZjqaKxusR3HI3xup-y4DijFfzS95y8QIFLZm74SRnpocv6K2FNpVZq9ETQfyeANj0dPgPd801s7_KslSr0S1-zBPJ2xgbOppNQ79axVm8-NY4ach1qfMOk59kVXA",
  joshua:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDqYOr3MqZxuGldkxVOsBGeiDY5f3pVRpxv2dG35_ZMnFBihyQPcPRaGQ0XaZ0m_6XWnZp8AazU7DMBMUJNA5XXiFdZL77E5sT3Lw4pIipn_gQrz8xaDXDazyOXkyQM4_OIA3z6T7yx97QVwIqB_w_JQ6x2smFk9AxhI_NCLRWlsp6zGJVn7FuUgDQXqtEmcmxXd_MLOHiOwI4NIV0Yc3K09gCA2fkREH-If_CXYwjY4nCtqsEmX-RCnNqoebyKZMMcCYsfyU9NwkE",
} as const;

export const executives: Executive[] = [
  {
    id: "1",
    name: "Bro. Samuel Akintola",
    position: "Director",
    church: "First Baptist Church, Lagos",
    bio: "Leading the association with vision and dedication.",
    image: OFFICER_IMAGES.samuel,
  },
  {
    id: "2",
    name: "Bro. David Ojo",
    position: "President",
    church: "Zion Baptist Church",
    bio: "Overseeing day-to-day operations and chapter coordination.",
    image: OFFICER_IMAGES.david,
  },
  {
    id: "3",
    name: "Bro. Emmanuel Adebayo",
    position: "Secretary",
    church: "Grace Baptist Church",
    bio: "Documentation and communication across the association.",
    image: OFFICER_IMAGES.emmanuel,
  },
  {
    id: "4",
    name: "Bro. Joshua Benson",
    position: "Treasurer",
    church: "Hope Baptist Church",
    bio: "Financial stewardship and resource management.",
    image: OFFICER_IMAGES.joshua,
  },
];

/** Hero image for executives page (group/leadership photo). */
export const executivesHeroImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDKmPytIS1EfDOJd_Yl_6VEu0-TuI3dH_PKCe_VG6gyF5Ntfte67R2lFlgf9rLsFw4ws6Eay__5-gDYyKPOdw07b9DpbIzIjMfuUahnWPUSgLZyrz9WtR7qhUdDQHHXfIY_lkiuZLAn7Y3D36HSRMnnzhSwsRWEoGXePoqWuxu0ENCgMS8_Ounoqa-hAfk89zxl4qiduLoMkuz4_2n_pRz-omfgBAy-vbSKZVsM2qtqKGcFxv2Ad8Y_fdkEQcfa6C657mzCs-3fSOg";
