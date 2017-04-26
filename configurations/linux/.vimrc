call plug#begin('~/.vim/plugged')
"Plug 'https://github.com/vim-scripts/JavaScript-Indent'
Plug 'https://github.com/embear/vim-localvimrc'
Plug 'https://github.com/2072/PHP-Indenting-for-VIm/'
Plug 'https://github.com/StanAngeloff/php.vim'
Plug 'https://github.com/evidens/vim-twig'
Plug 'https://github.com/ekalinin/Dockerfile.vim'
Plug 'https://github.com/cakebaker/scss-syntax.vim'
Plug 'https://github.com/jwalton512/vim-blade'
Plug 'https://github.com/jaxbot/syntastic-react'
Plug 'https://github.com/mxw/vim-jsx'
Plug 'https://github.com/embear/vim-localvimrc'
Plug 'https://github.com/beyondmarc/opengl.vim'
Plug 'https://github.com/tikhomirov/vim-glsl'
Plug 'christoomey/vim-tmux-navigator'
Plug 'mklabs/split-term.vim'
Plug 'https://github.com/ekalinin/Dockerfile.vim'
Plug 'https://github.com/NLKNguyen/vim-docker-compose-syntax'
Plug 'https://github.com/erickzanardo/vim-xclip'
Plug 'https://github.com/christoomey/vim-system-copy'
Plug 'junegunn/vim-easy-align'
Plug 'https://github.com/junegunn/vim-github-dashboard.git'
Plug 'SirVer/ultisnips' | Plug 'honza/vim-snippets'
Plug 'scrooloose/nerdtree', { 'on':  'NERDTreeToggle' }
Plug 'tpope/vim-fireplace', { 'for': 'clojure' }
Plug 'rdnetto/YCM-Generator', { 'branch': 'stable' }
Plug 'fatih/vim-go', { 'tag': '*' }
Plug 'nsf/gocode', { 'tag': 'v.20150303', 'rtp': 'vim' }
Plug 'junegunn/fzf', { 'dir': '~/.fzf', 'do': './install --all' }
Plug '~/my-prototype-plugin'
Plug 'https://github.com/flazz/vim-colorschemes'
Plug 'https://github.com/keith/tmux.vim'
Plug 'https://github.com/scrooloose/nerdtree'
Plug 'https://github.com/jistr/vim-nerdtree-tabs'
Plug 'https://github.com/Xuyuanp/nerdtree-git-plugin'
Plug 'https://github.com/kien/ctrlp.vim'
Plug 'https://github.com/vim-syntastic/syntastic'
Plug 'https://github.com/easymotion/vim-easymotion'
Plug 'https://github.com/pangloss/vim-javascript'
Plug 'https://github.com/jiangmiao/auto-pairs'
Plug 'https://github.com/Yggdroot/indentLine'
"Plug 'https://github.com/Shougo/neocomplete.vim'
Plug 'https://github.com/scrooloose/nerdcommenter'
Plug 'https://github.com/Valloric/MatchTagAlways'
Plug 'https://github.com/nono/vim-handlebars'
Plug 'https://github.com/tpope/vim-surround'
Plug 'https://github.com/burnettk/vim-angular'
Plug 'https://github.com/tpope/vim-repeat'
Plug 'https://github.com/mattn/emmet-vim'
"Plug 'https://github.com/ervandew/supertab'
Plug 'https://github.com/airblade/vim-gitgutter'
Plug 'https://github.com/vim-scripts/apachestyle'
Plug 'https://github.com/othree/html5.vim'
Plug 'davidosomething/syntastic-hbstidy'
Plug 'https://github.com/tfnico/vim-gradle'
Plug 'https://github.com/vim-scripts/groovy.vim'
Plug 'https://github.com/digitaltoad/vim-pug'
Plug 'https://github.com/ap/vim-css-color'
Plug 'https://github.com/mustache/vim-mustache-handlebars'
Plug 'https://github.com/rking/ag.vim'
call plug#end()

nmap ,make :w \| !make <cr>

set t_Co=256

set backupdir=~/.vim/backup/
set directory=~/.vim/swp/

set nowrap

set tabstop=3 shiftwidth=3 softtabstop=3 expandtab
"set clipboard+=unnamedplus
"set clipboard+=unnamed

" DEOPLETE SETUP
let g:deoplete#enable_at_startup = 1

let g:ctrlp_custom_ignore = '\.git\|node_modules\|bower_components\|laravel\/vendor'
let g:ctrlp_show_hidden = 1
let g:user_emmet_leader_key=','

let g:nerdtree_tabs_open_on_console_startup=1
let g:NERDTreeWinPos = "right"
let g:NERDTreeWinSize = 25 
let NERDTreeMapActivateNode='<space>'
imap \ne <c-o>:NERDTreeFind <cr>

let NERDTreeShowHidden=1

let g:nerdtree_tabs_open_on_console_startup=1
let g:NERDTreeWinPos = "right"
" let NERDTreeMinimalUI = 1
let NERDTreeDirArrows = 1

" let g:NERDTreeDirArrowExpandable = '→'
" let g:NERDTreeDirArrowCollapsible = '↓'
nmap ,ne :NERDTreeToggle <cr>
nmap \ne :NERDTreeToggle <cr>


set statusline+=%#warningmsg#
set statusline+=%{SyntasticStatuslineFlag()}
set statusline+=%*

let g:syntastic_javascript_checkers = ['jsxhint']
let g:syntastic_javascript_jsxhint_exec = 'jsx-jshint-wrapper'

let g:syntastic_always_populate_loc_list = 1
let g:syntastic_auto_loc_list = 1
let g:syntastic_check_on_open = 1
let g:syntastic_check_on_wq = 0

let g:syntastic_c_config_file = $HOME . '/nvim/syntastic_c_config.txt'
let g:syntastic_cpp_config_file = $HOME . '/nvim/syntastic_c_config.txt'

let g:syntastic_html_tidy_ignore_errors=[ 
      \ " proprietary attribute \"ng-", 
      \ " proprietary attribute", 
      \ " proprietary attribute \"app-", 
      \ "<app", "<\/app",
      \ 'trimming empty <',
      \ 'missing <li>',
      \ '<a> escaping malformed URI reference',
      \ '<img> lacks "alt" attribute',
      \ "<script> isn't allowed in <tbody> elements", 
      \ '<button> attribute name "@click"',
      \ 'is not recognized', 'discarding unexpected'
      \ ]

let g:syntastic_handlebars_hbstidy_ignore_errors=[ 
      \ " proprietary attribute \"ng-", 
      \ " proprietary attribute", 
      \ " proprietary attribute \"app-", 
      \ "<script> isn't allowed in <tbody> elements", 
      \ '<a> escaping malformed URI reference',
      \ "<app", "<\/app",
      \ 'missing <li>',
      \ 'trimming empty <',
      \ 'is not recognized', 'discarding unexpected'
      \ ]
let g:syntastic_filetype_map = {'html.handlebars': 'handlebars'}
let g:syntastic_handlebars_checkers  = ['handlebars', 'hbstidy']

let g:syntastic_c_compiler = 'i686-w64-mingw32-gcc'
"let g:syntastic_cpp_compiler = 'i686-w64-mingw32-g++'
"let g:syntastic_cpp_compiler = '/usr/bin/i686-w64-mingw32-g++'
let g:syntastic_cpp_compiler = 'g++'

if has('nvim')
   au filetype java map \mr :w \| Term make && make run <cr>
   au filetype cpp map \mr :w \| Term make && make run <cr>
   au filetype c map \mr :w \| Term make && make run <cr>

   au filetype cpp map ,mr :w \| Term make result && make run_result <cr>
   "au filetype c map \mr :w \| Term make && ./app <cr>
   "au filetype c map ,mr :w \| :terminal make && ./app <cr>
   "au filetype c map \mr :w \| :terminal make && ./app <cr>
else
   "au filetype c map ,mr :w \| !make && ./app <cr>
   "au filetype c map \mr :w \| !make && ./app <cr>
endif

set mouse=n

nmap ,edit :tabedit ~/.config/nvim/init.vim <cr>
au VimEnter,FileType vim,.vimrc,.lvimrc nmap ,so :w \| so % <cr>
au VimEnter,FileType c,cpp,*.c,*.cpp nmap ,so :e % <cr>
nmap qq :q <cr>
nmap ,install :w \| so % \| PlugInstall <cr>

" HIGHLIGHT
" ===================================================================================

" colorscheme wombat
" colorscheme molokai

hi comment ctermfg=red guibg=#ff0000

hi Visual guibg=#222222 guifg=none

hi Todo guifg=red ctermfg=red

hi Visual ctermbg=160
hi Pmenu ctermfg=160 ctermbg=none
hi PmenuSel ctermfg=red

set termguicolors
highlight Comment ctermfg=red
hi TabLine guifg=#ffffff guibg=#333333
hi Search guibg=#111111 guifg=#ff2222

" highlight link SyntasticErrorSign SignColumn
" highlight link SyntasticWarningSign SignColumn
" highlight link SyntasticStyleErrorSign SignColumn
" highlight link SyntasticStyleWarningSign SignColumn


"hi nonText ctermbg=none
"hi normal ctermbg=0 guibg=#FFFF

hi Pmenu guibg=#111111 guifg=#FFFFFF
hi PmenuSel guibg=#222222 guifg=#FFCCCC

set background=dark

let g:indentLine_enabled = 1

let g:neocomplete#enable_at_startup = 1

au BufRead,BufNewFile .jshintrc set filetype=json syntax=json
au BufRead,BufNewFile .babelrc set filetype=json syntax=json
au BufRead,BufNewFile .bowerrc set filetype=json syntax=json
au BufRead,BufNewFile .ember-cli set filetype=json syntax=json

"au filetype cpp map \mr :w \| !make && ./app <cr>

au filetype javascript nmap \mr :w \| !node % <cr>

"let g:syntastic_cpp_compiler = 'g++'
"let g:syntastic_cpp_compiler = 'g++'
"let g:syntastic_cpp_compiler = 'i686-w64-mingw32-g+'

autocmd BufNewFile bs-config.js 0r ~/nvim/skeletons/bs-config.js
autocmd BufNewFile .jshintrc 0r ~/nvim/skeletons/.jshintrc
autocmd BufNewFile webpack.config.js 0r ~/nvim/skeletons/webpack.config.js
autocmd BufNewFile gulpfile.js 0r ~/nvim/skeletons/gulpfile.js
autocmd BufNewFile Gruntfile.js 0r ~/nvim/skeletons/Gruntfile.js
autocmd BufNewFile nodemon.json 0r ~/nvim/skeletons/nodemon.json
autocmd BufNewFile main.c 0r ~/nvim/skeletons/main.c
autocmd BufNewFile .babelrc 0r ~/nvim/skeletons/.babelrc

" CUSTOM TEMPLATE FUNCTION
" ==========================================================
function! GetTemplate()
   " get the current line number
   let line = line('.')
   " get the current column number
   let col = col('.')
   " set cursor 1 character backwards
   call cursor(line, col-1)
   " templates directory path
   let path = $HOME . '/nvim/templates'
   " current file extension
   let ext = expand('%:e')
   if ext == 'hbs'
      let ext = 'html'
   endif
   " the word under cursor
   let word = expand('<cWORD>')
   " the result file
   let result = path . '/' . word . '.' . ext
   " if the file exists
   if filereadable(result)
      " delete current line
      d
      " go one line up
      call cursor(line-1, 0)
      " read the file content
      "execute "read" . result
      execute (line == 1 ? '-1' : '') . "read" . result
   else
      echo result . ' does not exist'
   endif
   return ''
endfunction
"map <c-g> :call GetTemplate() <cr>
"inoremap <c-l> <c-r>=GetTemplate() <cr>
imap ,l <c-r>=GetTemplate() <cr>
" ==========================================================

" if executable('xsel')
" let s:copy['+'] = 'xsel'
" let s:paste['+'] = 'xsel'
" let s:copy['*'] = s:copy['+']
" let s:paste['*'] = s:paste['+']
" let s:cache_enabled = 0
" endif

set cursorline
hi clear CursorLine 
hi CursorLine ctermbg=235 guibg=#111111

" map ,run :w \| !make && curl kodu.noip.me:3000/restart <cr>
map ,run :w \| !make run <cr>
map ,kill :w \| !curl kodu.noip.me:3000/kill <cr>


let g:localvimrc_ask = 0

" CHECK IF FILE EXISTS
" ==========================================================
function! FileExists(fname)
   if (filereadable(a:fname))
      " echo "file is '" . a:fname . "' readable"
   else
      echo "file is '" . a:fname . "' not readable"
   endif
endfunction
" ==========================================================

 let g:js_indent_log = 0
