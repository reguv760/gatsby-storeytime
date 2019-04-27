/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// this is used by react-scrollable-anchor
// due to gatsby 'bug' that scrolls to top
// when scrollbar reaches <Scrollable Anchor>
// without clicks on nav
exports.shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  if (location.hash) {
    return false
  }

  return true
}
