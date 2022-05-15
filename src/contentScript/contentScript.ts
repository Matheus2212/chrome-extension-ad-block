const tag_rules = ["div", "img", "iframe"];

const id_class_rules = ["ads ", "ad ", "banner "];

for (const tag_rule of tag_rules) {
  const elements = document.getElementsByTagName(tag_rule);
  for (var element of elements) {
    for (var id_class_rule of id_class_rules) {
      if (element.className.indexOf(id_class_rule) != -1) {
        element.remove();
      }
    }
  }
}
