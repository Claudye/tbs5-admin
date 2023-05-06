import { OnInit } from "../contracts/oninit";

export class Sidebar implements OnInit {
  onInit(): void {
    this.openSidebarMenuChildren();
  }

  private openSidebarMenuChildren() {
    $(function () {
      var dropBtn = $(".dropBtn");

      for (let i = 0; i < dropBtn.length; i++) {
        const element = dropBtn[i];
        $(element).on("click", function () {
          const angle = $(element).children(".angle");
          $(angle).toggleClass("k90deg");
          $(element).siblings().toggle();
        });
      }
    });
  }
}
