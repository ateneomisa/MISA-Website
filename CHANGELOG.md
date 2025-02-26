# MISA Airtable Dashboard Changelog

<!--
Changelog Format
### TL; DR
- [Initials of Dev] [#issue number](issue link on GitHub) {issue title}
-->

- [JA] [#119](https://github.com/Ateneo-MISA/MISA-Website/pull/119) vote(feature): change obf email mentions to student
- [JA] [#118](https://github.com/Ateneo-MISA/MISA-Website/pull/118) vote(feature): temporarily disable voting proper
- [JA] [#115](https://github.com/Ateneo-MISA/MISA-Website/pull/117) elections(feature): MISAlalan 2024 update
- [KF] [#112](https://github.com/ateneomisa/MISA-Website/issues/112) home page(feature): add website pages carousel
- [KF] [#110](https://github.com/ateneomisa/MISA-Website/issues/110) contact us(feature): add contact us page
- [KF] [#108](https://github.com/ateneomisa/MISA-Website/issues/108) merch(feature): fix QA issues 230602
- [KF] [#106](https://github.com/ateneomisa/MISA-Website/issues/106) app(feature): add dynamic content integration and universal components
- [KF] [#104](https://github.com/ateneomisa/MISA-Website/issues/104) merch(feature): add bundle features
- [KF] [#102](https://github.com/ateneomisa/MISA-Website/issues/102) merch(feature): add checkout email
- [KF] [#100](https://github.com/ateneomisa/MISA-Website/issues/100) merch(feature): fix ui issues 230528
- [KF] [#98](https://github.com/ateneomisa/MISA-Website/issues/98) merch(feature): add payment page
- [KF] [#96](https://github.com/ateneomisa/MISA-Website/issues/96) merch(feature): add checkout pages and mechanics
- [KF] [#94](https://github.com/ateneomisa/MISA-Website/issues/94) merch(feature): add cart page and mechanics
- [KF] [#92](https://github.com/ateneomisa/MISA-Website/issues/92) merch(feature): add individual product page
- [KF] [#90](https://github.com/ateneomisa/MISA-Website/issues/90) merch(feature): add landing page
- [MD] [#89](https://github.com/ateneomisa/MISA-Website/issues/89) services(feature): add services page
- [KF] [#85](https://github.com/ateneomisa/MISA-Website/issues/85) vote(feature): add coming soon text in button
- [KF MF] [#82](https://github.com/ateneomisa/MISA-Website/issues/82) vote(feature): fix ux/ui bugs 230326
- [KF MF] [#80](https://github.com/ateneomisa/MISA-Website/issues/80) vote(feature): add voting
- [KF] [#76](https://github.com/Ateneo-MISA/MISA-Website/issues/76) vote(feature): fix hero text
- [MD] [#72](https://github.com/Ateneo-MISA/MISA-Website/issues/72) vote(feature): add portfolio for candidates
- [MD] [#69](https://github.com/Ateneo-MISA/MISA-Website/issues/69) vote(feature): add elections and candidates pages
- [KF] [#64](https://github.com/Ateneo-MISA/MISA-Website/issues/64) app(feature): add environment to config
- [KF] [#61](https://github.com/Ateneo-MISA/MISA-Website/issues/61) app(feature): add and reorganize contentful queries
- [KF] [#58](https://github.com/Ateneo-MISA/MISA-Website/issues/58) home page(feature): fix upcoming events layout
- [KF] [#56](https://github.com/Ateneo-MISA/MISA-Website/issues/56) app(feature): fix image sizing at higher screens
- [KF] [#55](https://github.com/Ateneo-MISA/MISA-Website/issues/55) vote(feature): fix voting button
- [KF] [#50](https://github.com/Ateneo-MISA/MISA-Website/issues/50) app(feature): fix file imports
- [KF] [#48](https://github.com/Ateneo-MISA/MISA-Website/issues/48) home page(feature): fix styling for navbar and upcoming events
- [KF] [#47](https://github.com/Ateneo-MISA/MISA-Website/issues/47) app(feature): reorganize file structure and naming
- [KF] [#45](https://github.com/Ateneo-MISA/MISA-Website/issues/45) app(feature): fix image resolutions
- [KF] [#43](https://github.com/Ateneo-MISA/MISA-Website/issues/43) app(feature): apply ui feedback 230304
- [KF] [#41](https://github.com/Ateneo-MISA/MISA-Website/issues/41) voting(feature): add initial logic
- [MF] [#39](https://github.com/Ateneo-MISA/MISA-Website/issues/39) about us(feature): add core values
- [KF] [#37](https://github.com/Ateneo-MISA/MISA-Website/issues/37) app(feature): add universal components
- [MF] [#35](https://github.com/Ateneo-MISA/MISA-Website/issues/35) hexa card(feature): fix hexa card design
- [KF] [#33](https://github.com/Ateneo-MISA/MISA-Website/issues/33) hexa card(feature): add options for hexa card filters
- [KF] [#31](https://github.com/Ateneo-MISA/MISA-Website/issues/31) app(feature): fix file structure
- [MF] [#29](https://github.com/Ateneo-MISA/MISA-Website/issues/29) hexa card(feature): add hexa card
- [KF] [#27](https://github.com/Ateneo-MISA/MISA-Website/issues/27) specific event(feature): add highlights frame and contentful integration
- [MF] [#23](https://github.com/Ateneo-MISA/MISA-Website/issues/23) home page(feature): fix wrong font
- [KF] [#20](https://github.com/Ateneo-MISA/MISA-Website/issues/20) hexa card(feature): add hexa card page and hero frame
- [KF] [#18](https://github.com/Ateneo-MISA/MISA-Website/issues/18) specific event(feature): add hero image and active registration button contentful integration
- [KF] [#16](https://github.com/Ateneo-MISA/MISA-Website/issues/16) specific event(feature): add initial frames, add tagline, description, and testimonials contentful integration
- [KF] [#14](https://github.com/Ateneo-MISA/MISA-Website/issues/14) about us(feature): fix hexagon image sizing
- [KF] [#12](https://github.com/Ateneo-MISA/MISA-Website/issues/12) about us(feature): add hero frame and mission/vision frame
- [KF] [#9](https://github.com/Ateneo-MISA/MISA-Website/issues/9) app(feature): add tailwind css
- [KF MD] [#5](https://github.com/Ateneo-MISA/MISA-Website/issues/5) home page(feature): add events frame
- [MF] [#4](https://github.com/Ateneo-MISA/MISA-Website/issues/4) home page(feature): add hero
- [AL] [#3](https://github.com/Ateneo-MISA/MISA-Website/issues/3) home page(feature): add footer
- [KF] [#2](https://github.com/Ateneo-MISA/MISA-Website/issues/2) home page(feature): add navbar
- [KF] [#1](https://github.com/Ateneo-MISA/MISA-Website/issues/1) app(feature): add initial project files
