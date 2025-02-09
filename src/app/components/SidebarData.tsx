import { 
    PiHouseDuotone, 
    PiSparkleDuotone, 
    PiBriefcaseDuotone, 
    PiUsersDuotone, 
    PiDatabaseDuotone, 
    PiClipboardDuotone, 
    PiUserDuotone, 
    PiMoneyDuotone,
    PiCurrencyCircleDollarDuotone,
    PiBookDuotone
  } from "react-icons/pi";
  
  export const sidebarItems = [
      {
          title: "Dashboard",
          icon: <PiHouseDuotone size={20} />,
          path: "/",
      },
      {
          title: "Contest",
          icon: <PiSparkleDuotone size={20} />,
          children: [
              { title: "Contests", path: "/contests" },
              { title: "Packages", path: "/packages" },
          ],
      },
      {
          title: "Payment/Invoice",
          icon: <PiCurrencyCircleDollarDuotone size={20} />,
          children: [
              { title: "Order", path: "/order" },
              { title: "Discount Codes", path: "/discount-codes" },
              { title: "Invoices", path: "/invoices" },
          ],
      },
      {
          title: "Plan/Assign",
          icon: <PiHouseDuotone size={20} />,
          path: "/plan-assign",
      },
      {
          title: "Workout Library",
          icon: <PiBriefcaseDuotone size={20} />,
          children: [
              { title: "Exercises", path: "/workout/exercises" },
              { title: "Workout Days", path: "/workout/days" },
              { title: "Workout Weeks", path: "/workout/weeks" },
          ],
      },
      {
          title: "Nutrition Library",
          icon: <PiBriefcaseDuotone size={20} />,
          children: [
              { title: "Ingredients", path: "/nutrition/ingredients" },
              { title: "Meals", path: "/nutrition/meals" },
              { title: "Diet Days", path: "/nutrition/diet-days" },
              { title: "Diet Weekly", path: "/nutrition/diet-weekly" },
              { title: "Food Preferences", path: "/nutrition/food-preferences" },
              { title: "Recipe Book Masters", path: "/nutrition/recipe-book-masters" },
          ],
      },
      {
          title: "User",
          icon: <PiUserDuotone size={20} />,
          children: [
              { title: "User Database", path: "/user/database" },
              { title: "Daily Activity", path: "/user/daily-activity" },
              { title: "Allergy", path: "/user/allergy" },
              { title: "Login Details", path: "/user/login-details" },
          ],
      },
      {
          title: "Trainer's Activity",
          icon: <PiUsersDuotone size={20} />,
          path: "/trainer-activity",
      },
      {
          title: "Motivation",
          icon: <PiUsersDuotone size={20} />,
          path: "/motivation",
      },
      {
          title: "Application Details",
          icon: <PiUsersDuotone size={20} />,
          path: "/application-details",
      },
      {
          title: "User Application Details",
          icon: <PiUsersDuotone size={20} />,
          path: "/user-application-details",
      },
      {
          title: "Custom Menu",
          icon: <PiDatabaseDuotone size={20} />,
          children: [
              { title: "Create User", path: "/custom/create-user" },
              { title: "Change Contest", path: "/custom/change-contest" },
              { title: "Soft Reset Leaderboard", path: "/custom/soft-reset-leaderboard" },
              { title: "Reset Leaderboard", path: "/custom/reset-leaderboard" },
              { title: "Reset Contest", path: "/custom/reset-contest" },
              { title: "Create Contest", path: "/custom/create-contest" },
              { title: "Create Influencer And Promo Code", path: "/custom/create-influencer-promo" },
              { title: "Create Code", path: "/custom/create-code" },
              { title: "Add Steps", path: "/custom/add-steps" },
          ],
      },
      {
          title: "Stripe Handler",
          icon: <PiDatabaseDuotone size={20} />,
          children: [
              { title: "Unsubscribe Now", path: "/stripe/unsubscribe" },
              { title: "Resubscribe", path: "/stripe/resubscribe" },
              { title: "Send Unsubscription Email", path: "/stripe/send-unsubscription-email" },
          ],
      },
      {
          title: "Diaries",
          icon: <PiBookDuotone size={20} />,
          path: "/diaries",
      },
      {
          title: "Leaderboard",
          icon: <PiUserDuotone size={20} />,
          path: "/leaderboard",
      },
      {
          title: "Schedulers",
          icon: <PiClipboardDuotone size={20} />,
          children: [
              { title: "Schedulers", path: "/schedulers" },
              { title: "Scheduler Slots", path: "/schedulers/slots" },
          ],
      },
      {
          title: "User Contest Logs",
          icon: <PiUserDuotone size={20} />,
          path: "/user-contest-logs",
      },
  ];
  