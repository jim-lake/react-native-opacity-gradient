
# react-native-opacity-gradient

## Getting started

`$ npm install react-native-opacity-gradient --save`

### Mostly automatic installation

`$ react-native link react-native-opacity-gradient`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-opacity-gradient` and add `RNOpacityGradient.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNOpacityGradient.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNOpacityGradientPackage;` to the imports at the top of the file
  - Add `new RNOpacityGradientPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-opacity-gradient'
  	project(':react-native-opacity-gradient').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-opacity-gradient/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-opacity-gradient')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNOpacityGradient.sln` in `node_modules/react-native-opacity-gradient/windows/RNOpacityGradient.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Opacity.Gradient.RNOpacityGradient;` to the usings at the top of the file
  - Add `new RNOpacityGradientPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNOpacityGradient from 'react-native-opacity-gradient';

// TODO: What to do with the module?
RNOpacityGradient;
```
  