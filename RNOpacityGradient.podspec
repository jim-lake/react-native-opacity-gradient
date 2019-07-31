
Pod::Spec.new do |s|
  s.name         = "RNOpacityGradient"
  s.version      = "1.0.3"
  s.summary      = "RNOpacityGradient"
  s.description  = <<-DESC
                  React Native Opacity Gradient
                   DESC
  s.homepage     = "https://github.com/jim-lake/react-native-opactity-gradient"
  s.license      = "MIT"
  s.author       = { "author" => "jim@blueskylabs.com" }
  s.platform     = :ios, "7.0"
  s.source       = { :git => "https://github.com/jim-lake/react-native-opactity-gradient.git", :tag => "master" }
  s.source_files  = "ios/*.{h,m}"

  s.dependency "React"

end

