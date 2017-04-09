# app_icon_generator
A simple tool to generate icons, splash screen images for iOS, OXS and Android

## Installing

```shell
 $ npm install -g app_icon_generator
```

## Usage

```shell
  $ app_icon_generator -h

  Usage: app_icon_generator [options] [command]


  Commands:

    icon <platform> <input> <output>    generate incos for given platform
    splash <platform> <input> <output>  generate splash screen images for given platform

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
```

## Sample

#### Generate icons:

```shell
  $ app_icon_generator icon android ~/demo/icon.png ~/res
  $ app_icon_generator icon ios ~/demo/icon.png ~/res
  $ app_icon_generator icon osx ~/demo/icon.png ~/res
```

#### Generate splash screen images:

```shell
  $ app_icon_generator splash android ~/demo/splash.png ~/res
  $ app_icon_generator splash ios ~/demo/splash.png ~/res
```

## License
* [MIT](http://www.opensource.org/licenses/MIT)