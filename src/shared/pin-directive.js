/* eslint-disable */
export default {
  mounted: (element, binding) => {
    element.style.position = 'absolute';
    Object.keys(binding.value).forEach((key) => {
      element.style[key] = binding.value[key];
    });
  },
};
