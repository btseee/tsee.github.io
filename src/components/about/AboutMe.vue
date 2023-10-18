<script>
export default {
  setup() {
    const currentYear = (new Date().getFullYear() - 2020).toString();
    return {
      bios: [
        {
          id: 1,
          bio:
            "Би ШУТИС-ийн программ хангамжийн инженер мэргэжилтэй бөгөөд эл чиглэлээр " +
            currentYear +
            " жил ажилласан туршлагатай. Би урам зоригтоо хөтлөгдөн мэдлэгээ өргөжүүлж, төрөл бүрийн технологи, UI дизайнтай ажиллахыг үргэлж хүсдэг. Миний мэдлэгт NodeJS, Typescript, Angular, ReactJS, MongoDB, PostgreSQL, Python багтдаг бөгөөд би шинэ хөгжүүлэгчдэд зөвлөгөө өгөх дуртай.",
        },
        {
          id: 2,
          bio: "Ажлаас гадуур би технологийн салбарын шинэ технологи, чиг хандлагыг судлах хүсэл эрмэлзэлтэй байдаг. Би хамгийн сүүлийн үеийн дэвшлийн талаар мэдээлэл авахын тулд технологийн хурал, семинарт оролцох дуртай. Намайг кодчилдоггүй үед та намайг график дизайн, гэрэл зураг гэх мэт бүтээлч эрэл хайгуул хийж байхыг олонтаа олж мэднэ.",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
    <!-- About profile image -->
    <div class="w-full sm:w-1/4 mb-7 sm:mb-0">
      <img src="@/assets/images/profile.png" class="rounded-xl w-96" alt="" />
    </div>

    <!-- About details -->
    <div class="w-full sm:w-3/4 text-left">
      <p
        v-for="bio in bios"
        :key="bio.id"
        class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
      >
        {{ bio.bio }}
      </p>
    </div>
  </div>
</template>
