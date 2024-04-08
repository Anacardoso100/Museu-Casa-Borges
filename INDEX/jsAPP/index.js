document.onreadystatechange = function (e) {
   if (document.readyState === "complete") {
      if (history.state !== null) {
         if (history.state.params && history.state.params.length > 0) {
            loadSessionStorageValues(history.state.params);
         }
         $("#conteudo").load(history.state.page);
      } else {
         saveNavegation({ page: "index_firstpage.html" });
      }
   }
};

window.onpopstate = function (e) {
   if (e.state !== null) {
      if (e.state.params && e.state.params.length > 0) {
         loadSessionStorageValues(e.state.params);
      }
      $("#conteudo").load(e.state.page);
   }
};

function saveNavegation(frag) {
   history.pushState(frag, null, null);
   if (frag.params && frag.params.length > 0) {
      loadSessionStorageValues(frag.params);
   }
   $("#conteudo").load(frag.page);
}

function loadSessionStorageValues(list) {
   jQuery.each(list, function (idx, obj) {
      window.sessionStorage.setItem(obj.key, obj.value);
   });
}

$(document).ready(function () {

   $("#logoMuseu").on("click", function (event) {
      saveNavegation({ page: "index_firstpage.html" });
   });

   $("#btnBackHome").on("click", function (event) {
      window.location.replace(window.sessionStorage.getItem("path"));
   });

   $("#btnMuseu").on("click", function (event) {
      saveNavegation({ page: "museu.html" });
   });

   // $(document).on("click", ".navbar-collapse", function (e) {
   //    if ($(e.target).is('a:not(".dropdown-toggle")')) {
   //       $(this).collapse("hide");
   //    }
   // });
});
